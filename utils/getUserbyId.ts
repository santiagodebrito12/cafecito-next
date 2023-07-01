import usersApi from "@/apis"

export const getUserById = async(id:string) =>{

    try {
        const res = await usersApi.get(`/users/${id}`)
        const user = await res.data;
        return user
    } catch (error) {
        console.log(error)
    }
}