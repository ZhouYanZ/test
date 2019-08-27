//promise函数 ECMAScript6中新增的函数。

//简单理解


let p = new Promise((resolve, reject) => {

  let code = -1; //代表异步操作的结果，0代表成功，-1代表失败。可以尝试改变结果状态看看打印出来的结果。

  if (code == 0) {
    resolve('我成功了')
  } else if (code == -1) {
    reject('我失败了')
  }

});

p.then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)

})

//实战理解：

//简单实现axios方法重写，这里只实现get请求方式。
function axios(obj) {
  let arr = []
  for (key in obj.data) {
    arr.push(`${key}=${obj[key]}`)
  }
  let requestText = arr.join('&')
  return new Pormise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300 || xhr.status == 304)) {
          resolve(xhr.response)
        } else {
          reject('请求失败了')
        }
      }
    }
    xhr.open(obj.method, `${obj.url}?${requestText}`, true); //这里requestText === "firstName='Fred'&lastName='Flintstone'"
    xhr.send(null)
  })
}

axios({
  method: 'get',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
}).then(data => { //这里data === xhr.response
  console.log(data)
}).catch(err => { //这里err === '请求失败了'
  console.log(err)
})




