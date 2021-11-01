const arr = [
        { id: 1, name: "部门1", pid: 0 },
        { id: 2, name: "部门2", pid: 1 },
        { id: 3, name: "部门3", pid: 1 },
        { id: 4, name: "部门4", pid: 3 },
        { id: 5, name: "部门5", pid: 4 },
      ];



      function toTree(arr, id=0) {
        return arr.filter(item=>item.pid === id).map(item=>(item.children=toTree(arr, item.id)&&item))
      }

      // function toTree(arr) {
      //     const result = []
      //    function getChild (arr, result, id) {
      //     arr.forEach((item)=>{
      //       if(item.pid === id) {
      //         result.push(item)
      //         getChild(arr, item.children ? item.children: (item.children = []), item.id)
      //       }
      //     })
      //    }
      //    getChild(arr, result, 0)
      //   return result
      // }

      // function toTree(arr) {
      //   const obj = {}
      //   const result = []
      //   arr.forEach(item=>{
      //     obj[item.id] = item
      //   })

      //   arr.forEach((item) => {
      //     if(item.pid === 0) {
      //       result.push(item)
      //     }
      //     const c = obj[item.pid]

      //     if(c) {
      //       c.children ? (c.children.push(item)) : (c.children = [item])
      //     }
      //   })
      //   return result
      // }

      // function toTree(arr) {
      //   const obj = {}
      //   const result = []
      //   arr.forEach(item=> {
      //     if(!obj[item.id]) {
      //       item.children = []
      //       obj[item.id] = item
      //     } else {
      //       obj[item.id].children.push(item)
      //     }

      //     if(item.pid === 0) {
      //       result.push(item)
      //     } else if(obj[item.pid]) {
      //       obj[item.pid].children.push(item)
      //     }
      //   })
      //   return result
      // }

      console.log(toTree(arr));
 