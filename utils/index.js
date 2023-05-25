export function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}


export const getUniqueNodeId = (nodeData, nodes) => {
    // Get amount of same nodes
    let totalSameNodes = 0
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i]
        if (node.data.name === nodeData.name) {
            totalSameNodes += 1
        }
    }

    // Get unique id
    let nodeId = `${nodeData.name}_${totalSameNodes}`
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i]
        if (node.id === nodeId) {
            totalSameNodes += 1
            nodeId = `${nodeData.name}_${totalSameNodes}`
        }
    }
    return nodeId
}

export const initNode = (nodeData, newNodeId) => {
    const inputAnchors = []
    const inputParams = []
    const incoming = nodeData.inputs ? nodeData.inputs.length : 0
    const outgoing = 1
    
    const whitelistTypes = ['options', 'string', 'number', 'boolean', 'password', 'json', 'code', 'date', 'file', 'folder']

    for (let i = 0; i < incoming; i += 1) { //It loops through the incoming connections and creates new input objects with unique IDs.
        const newInput = {
            ...nodeData.inputs[i],
            id: `${newNodeId}-input-${nodeData.inputs[i].name}-${nodeData.inputs[i].type}`
        }
		//If the input type is in the whitelist, it adds the input object to inputParams; otherwise, it adds it to inputAnchors.
        if (whitelistTypes.includes(nodeData.inputs[i].type)) {
            inputParams.push(newInput)
        } else {
            inputAnchors.push(newInput)
        }
    }

    const outputAnchors = []

	//It loops through the outgoing connections and creates output objects based on the nodeData.
    for (let i = 0; i < outgoing; i += 1) {
        if (nodeData.outputs && nodeData.outputs.length) {
            const options = []
            for (let j = 0; j < nodeData.outputs.length; j += 1) {
                let baseClasses = ''
                let type = ''

                const outputBaseClasses = nodeData.outputs[j].baseClasses ?? []
				//If the output has multiple base classes, it concatenates them with a pipe (|) and adds them to the options array.
                if (outputBaseClasses.length > 1) {
                    baseClasses = outputBaseClasses.join('|')
                    type = outputBaseClasses.join(' | ')
                } else if (outputBaseClasses.length === 1) {
                    baseClasses = outputBaseClasses[0]
                    type = outputBaseClasses[0]
                }
				//constraints for ouput
                const newOutputOption = {
                    id: `${newNodeId}-output-${nodeData.outputs[j].name}-${baseClasses}`,
                    name: nodeData.outputs[j].name,
                    label: nodeData.outputs[j].label,
                    type
                }
                options.push(newOutputOption)
            }
			//output object
            const newOutput = {
                name: 'output',
                label: 'Output',
                type: 'options',
                options,
                default: nodeData.outputs[0].name
            }
            outputAnchors.push(newOutput)
        } else {
            const newOutput = {
                id: `${newNodeId}-output-${nodeData.name}-${nodeData.baseClasses.join('|')}`,
                name: nodeData.name,
                label: nodeData.type,
                type: nodeData.baseClasses.join(' | ')
            }
            outputAnchors.push(newOutput)
        }
    }

    /* Initial
    inputs = [
        {
            label: 'field_label_1',
            name: 'string'
        },
        {
            label: 'field_label_2',
            name: 'CustomType'
        }
    ]

    =>  Convert to inputs, inputParams, inputAnchors

    =>  inputs = { 'field': 'defaultvalue' } // Turn into inputs object with default values
    
    =>  // For inputs that are part of whitelistTypes
        inputParams = [
            {
                label: 'field_label_1',
                name: 'string'
            }
        ]

    =>  // For inputs that are not part of whitelistTypes
        inputAnchors = [
            {
                label: 'field_label_2',
                name: 'CustomType'
            }
        ]
    */
    if (nodeData.inputs) {
        nodeData.inputAnchors = inputAnchors
        nodeData.inputParams = inputParams
        nodeData.inputs = initializeDefaultNodeData(nodeData.inputs)
    } else {
        nodeData.inputAnchors = []
        nodeData.inputParams = []
        nodeData.inputs = {}
    }

    if (nodeData.outputs) {
        nodeData.outputs = initializeDefaultNodeData(outputAnchors)
    } else {
        nodeData.outputs = {}
    }

    nodeData.outputAnchors = outputAnchors
    nodeData.id = newNodeId

    return nodeData
}

export const initializeDefaultNodeData = (nodeParams) => {
    const initialValues = {}

    for (let i = 0; i < nodeParams.length; i += 1) {
        const input = nodeParams[i]
        initialValues[input.name] = input.default || ''
    }

    return initialValues
}