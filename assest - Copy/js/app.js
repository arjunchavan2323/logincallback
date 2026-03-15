


const cl=console.log;

const loginform=document.getElementById('loginform')
const emailcontrol=document.getElementById('email')
const passwordcontrol=document.getElementById('password')

function snackbar(msg, icon){
    Swal.fire({
        msg:msg,
        icon:icon,
        timer:2000
    })

}

function onloginsubmit(eve){
    eve.preventDefault()
    let emailobj={
email:emailcontrol.value,
password:passwordcontrol.value
    }
    cl(emailobj)
    loginemail(emailobj.email, emailobj.password)

}




function loginemail(email, password){
     setTimeout(() => {
          if(email==='jhon123@gmail.com' &&  password==='zaq1'){
            cl('email & password are the correct')
            snackbar('email & password are the correct', 'success')
          }else{
            cl('email and password password are incorrect')
             snackbar('email & password are the correct', 'error')
          }
     }, 1000);
}

loginform.addEventListener("submit", onloginsubmit)



// function hrcall(){
//     setTimeout(() => {
//         let error=Math.random() >=0.5 ? false : true;
//         if(!error){
//             cl('candidate shortlisted the first round')
//             firstinterview()
//         }else{
//             cl('candidate is see is no more Angular')
//         }
//     }, 1500);
// }



// function firstinterview(){
//     setTimeout(() => {
//         let error=Math.random() >=0.5 ? false : true;
//         if(!error){
//             cl('candidate shortlisted the second round')
//             secondinterview()
            
//         }else{
//             cl('candidate is the shortlisted are the second round poor skill')
//         }
//     }, 1000)
// }


// function secondinterview(){
//     setTimeout(() => {
//         let error=Math.random() >=0.5 ?false :true;
//         if(!error){
//             cl('candidate is the shortlisted the final round')
//         }else{
//             cl('candidate are shortlisted the final round fail')
//         }
//     }, 500);
// }
// hrcall()



// const blogform=document.getElementById("blogform")
// const titlecontrol=document.getElementById("title")
// const contentcontrol=document.getElementById("content")

// let blogArray=[
//     {
//         title:"Angular 20",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, praesentium!"
//     },
//      {
//         title:"Angular 14",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, praesentium!"
//     },

// ]

// function blogsubmit(eve){
// eve.preventDefault()
//     let blogobj={
//         title:titlecontrol.value,
//         content:contentcontrol.value
//     }
//     cl(blogobj)
//     createblog(blogobj)
// }

// function createblog(blog){
//     setTimeout(() => {
//           let error=Math.random() >=0.5 ? false : true;

//           if(error){
//             cl('data is createblog by the success')
//             blogArray.unshift(blog)
//             fetchblog()
//           }else{
//             cl('blog does not added')
//           }
//     }, 1500);
// }

// function fetchblog(){
//     setTimeout(() => {
//         let error=Math.random() >=0.5 ? false : true;

//         if(!error){
//             cl('fetch data are successfully')
//             let data=blogArray;
//             createcard(data)
//         }else{
//             cl('fetch data are the problem')
//         }
//     }, 1000);
// }

// function createcard(arr){
//     let result=[]
//     arr.forEach(blog => {
//           result+=
//           `

//            <div class="card">
//                         <div class="card-body">
//                             <h1>${blog.title}</h1>
//                             <p>${blog.content}</p>
//                         </div>
//                         <div class="d-flex justify-content-between">
//                             <button class="btn btn-primary">edit</button>
//                         <button class="btn btn-danger">Delete</button>
//                         </div>
//                     </div>


//           `
//     });
//     const blogcontainer=document.getElementById('blogcontainer')
//     blogcontainer.innerHTML=result
// }




// blogform.addEventListener('submit', blogsubmit)




// const emaillogin=document.getElementById('emaillogin')
// const emailcontrol=document.getElementById('email')
// const passwordcontrol=document.getElementById('password')


// function onloginemail(eve){
//     eve.preventDefault()
//     let emailobj={
//         email:emailcontrol.value,
//         password:passwordcontrol.value

//     }
//     cl(emailobj)
//     login(emailobj.email, emailobj.password)
//     .then(res => {
//         cl(res)
//     })
//     .catch(err => {
//         cl(err)
//     })
// }

// function login(email, password){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(email==='jhon123@gmail.com' && password==='zaq1'){
//                 let data={
//                   msg:'email and password are correct'
//                 }
//                 resolve(data)
//                 snackbar(data, 'success')
//             }else{
//                 let errormsg={
//                     msg:'email are incoorect'
//                 }
//                 reject(errormsg)
//                  snackbar(errormsg, 'error')
//             }
//         }, 1500);
//     })
// }
// emaillogin.addEventListener("submit", onloginemail)


// function hrcall(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//          let error=Math.random() >=0.5 ? false : true;
//      if(!error){
//         let data='candidate are the shortlisted first round'
//         resolve(data)
//      }else{
//         let errormsg='candidate are the are another call'
//         reject(errormsg)
//      }
//     }, 1500);
//     } )
// }
// function firstinterview(){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         let error=Math.random() >=0.5 ? false : true;
//         if(!error){
//             let data='candidate are the shortlisted second round'
//             resolve(data)
//         }else{
//             let errormsg='candidate are shortlisted poor coding'
//             reject(errormsg)
//         }
//        }, 1000);
//     }, )
// }

// function secondround(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//               let error=Math.random() >=0.5 ? false : true;
//               if(!error){
//                 let data='candidate are the shortlisted the final round'
//                 resolve(data)
//               }else{
//                let erormsg='candidate are shortlisted final round fail'
//                reject(erormsg)
//               }
//         }, 1000);
//     })
// }


// function finalround(){
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error=Math.random() >= 0.5 ? false : true;
//             if(!error){
//                 let data='candidate are shortlisted are you are and salaryslip'
//                 resolve(data)
//             }else{
//                 let erormsg='candidate are shortlisted are fail oppurtunity'
//                 reject(erormsg)
//             }
//         }, 500);
//     })
// }

// hrcall()

// .then(res => {
//     cl(res)
//     return firstinterview()
// })
// .then(res => {
//     cl(res)
//     return secondround()
// })
// .then(res => {
//     cl(res)
//     return finalround()
// })
// .then(res => {
//     cl(res)
// })
// .catch(err => {
//     cl(err)
// })



// const blogform=document.getElementById('blogform')
// const titlecontrol=document.getElementById('title')
// const contentcontrol=document.getElementById('content')


// let blogArray=[
//     {
//         title:'Angular 20',
//         content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
//     },
//      {
//         title:'Angular 18',
//         content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
//     }
// ]


// function onblogsubmit(eve){
//     eve.preventDefault()
//     let blogobj={
//       title:titlecontrol.value,
//       content:contentcontrol.value
//     }
//     cl(blogobj)
//     createblog(blogobj)
//     .then(res => {
//         cl(res)
//         return fetchblog()
//     })
//     .then(res => {
//         cl(res)
//         createcard(res)
//     })
//    .catch(err=> {
//     cl(err)
//    })
// }


// function createblog(blog){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//             let error=Math.random() >=0.5 ? false : true;
//         if(!error){
//             let data='blog are create shortlisted'
//             resolve(data)
//        blogArray.unshift(blog)
//         }else{
//            let errordata='somethong problem create data'
//            reject(errordata)
//         }
//     }, 1500);
//     } )
// }

// function fetchblog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            let error=Math.random() >=0.5 ? false : true;
//            if(!error){
//             let data=blogArray
//             resolve(data)
//            } else{
//             let errormsg='candidate are the fetch problem'
//             reject(errormsg)
//            }
//         }, 1000);
//     })
// }


// function createcard(arr){
//     let result=[]
//     arr.forEach(blog => {
//          result+=
//          `
//            <div class="card">
//                     <div class="card-body">
//                         <h1>${blog.title}</h1>
//                         <p>${blog.content}</p>
//                         <div class="d-flex justify-content-between">
//                             <button class="btn btn-primary">edit</button>
//                             <button class="btn btn-danger">delete</button>
//                         </div>
//                     </div>
//                 </div>


//          `
//     });
//     const blogcontainer=document.getElementById("blogcontainer")
//     blogcontainer.innerHTML=result
//     snackbar('blog created succesfully', 'success')
// }









// blogform.addEventListener('submit', onblogsubmit)





