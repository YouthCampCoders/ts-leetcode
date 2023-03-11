import { TreeNode } from './dataStructure'

const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(
    8,
    new TreeNode(13),
    new TreeNode(4, new TreeNode(5), new TreeNode(1))
  )
)
function pathSum(root: TreeNode | null, target: number): number[][] {
  if (!root) return []
  const res: number[][] = []
  function dfs(node: TreeNode, path: number[], sum: number) {
    if (sum === target && !node.left && !node.right) {
      res.push([...path])
      return
    }
    if (node.left) {
      path.push(node.left.val)
      dfs(node.left, path, sum + node.left.val)
      path.pop()
    }
    if (node.right) {
      path.push(node.right.val)
      dfs(node.right, path, sum + node.right.val)
      path.pop()
    }
  }
  dfs(root, [root.val], root.val)
  return res
}

pathSum(root, 22)
