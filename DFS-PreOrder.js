class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (this.root) {
            let current = this.root
            while (true) {
                if (val === current.val) return undefined
                if (val < current.val) {
                    if (current.left == null) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                }
                else {
                    if (current.right == null) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                }
            }
        } else {
            this.root = newNode
        }
        return this
    }

    find(val) {
        if (!this.root) return false
        let current = this.root
        let found = false
        while (!found && current) {
            if (val < current.val)
                current = current.left
            else if (val > current.val)
                current = current.right
            else
                found = true
        }
        if (!found) return 'not found'
        return current
    }




    DFSPreOrder() {
        var node = this.root,
            data = []
        function traverse(node) {
            data.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(node)
        return data
    }
    DFSPostOrder() {
        var node = this.root,
            data = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(node)
        return data
    }
    DFSInOrder() {
        var node = this.root,
            data = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            data.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(node)
        return data
    }
}

let tree = new BinarySearchTree()

tree.insert(19)

tree.insert(20)
tree.insert(22)
tree.insert(23)

tree.insert(24)

tree.insert(11)
tree.insert(6)
tree.insert(7)
tree.insert(11)


console.log(JSON.stringify(tree));

console.log(tree.DFSInOrder());