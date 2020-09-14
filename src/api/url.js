
let URL

if(process.env.REACT_APP_ENV === 'dev'){
    URL = process.env.REACT_APP_API_URL;
}else {

    URL = process.env.API_URL;
}


export default URL;