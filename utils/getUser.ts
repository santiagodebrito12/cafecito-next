import usersApi from "@/apis";

export const getUsers = async () => {
    
    try {
        const res = await usersApi.get('/users');
        const users = await res.data;
        return  users;

      } catch (error) {
          console.log(error)
      }
}
