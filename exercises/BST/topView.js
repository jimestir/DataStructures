function treeTopView(node){
    let tempQueue = [];
    let result = [];
    let maxWL = 0;
    let maxWR = 0;

    if(node!=null){
        tempQueue.push({
            width: 0,
            node: node,
        })
        result.push(node.data);
        while(tempQueue.length>0){
            let currNode = tempQueue.shift();
            if(currNode.left!=null) {
                const item = {
                    width: currNode.width - 1,
                    node: currNode.node.left,
                }
                tempQueue.push(item);
                if (item.width < maxWL) {
                    maxWL = item.width;
                    result.push(item.node.data);
                }
            }
            if(currNode.right!=null){
                const item = {
                    width: currNode.width + 1,
                    node: currNode.right
                }
                tempQueue.push(item);
                if (item.width > maxWR) {
                    maxWR = item.width;
                    result.push(item.node.data);
                }
            }
        }
        return result
    }
    else {
        return null
    }
}