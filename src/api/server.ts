let token = "5a32e8b1cd844dc8a425a9b71fc3ff417a952c1245035bdd"


export const server_calls = {
    get: async () => {
        const response1 = await fetch(`https://stupendous-oceanic-shamrock.glitch.me/api/games`,
        {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
        });
        
        if (!response1.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response1.json()
        
    },
    


    create: async (data: any = {}) => {
        const response = await fetch(`https://stupendous-oceanic-shamrock.glitch.me/api/games`,
        {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://stupendous-oceanic-shamrock.glitch.me/api/games/${id}`,
        {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://stupendous-oceanic-shamrock.glitch.me/api/games/${id}`, 
        {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
            
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },

    
}