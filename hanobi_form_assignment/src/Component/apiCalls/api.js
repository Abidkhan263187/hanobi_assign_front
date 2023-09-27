import axios from 'axios'



// check if user exist or not 
export const getUserData = (userName, gotoForm) => {
    try {
        axios.post(`https://hanobi-assign-backend.onrender.com/userform`, { userName }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).
            then(({ data }) => {
                gotoForm();
                return data.user
            })
    } catch (error) {
        console.log(error)
    }
}


// for new user to be created
export const submitForm = (userName, formData, gotoResult) => {
    const { name, phNo, email, dob } = formData
    try {
        axios.post(`https://hanobi-assign-backend.onrender.com/formSubmit`, {
            userName: userName,
            name: name,
            email: email,
            phNo: phNo,
            dob: dob

        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).
            then(({ data }) => {


                gotoResult();
                return data.user
            })
    } catch (error) {
        console.log(error)
    }
}


// for update user details
export const updateform = async (userName, formData, gotoResult, id) => {

    const { name, phNo, email, dob } = formData
    try {
        await axios.put(`https://hanobi-assign-backend.onrender.com/formUpdate/${id}`, {
            userName: userName,
            name: name,
            email: email,
            phNo: phNo,
            dob: dob

        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).
            then(({ data }) => {
                gotoResult();
                return data.user
            })
    } catch (error) {
        console.log(error)
    }
}
