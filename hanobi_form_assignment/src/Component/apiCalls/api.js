import axios from 'axios'



// check if user exist or not 
export const getUserData = (userName, gotoForm) => {
    try {
        axios.post(`http://localhost:8000/userform`, { userName }, {
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
        axios.post(`http://localhost:8000/formSubmit`, {
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
        await axios.put(`http://localhost:8000/formUpdate/${id}`, {
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
