
class ServiceRep {
    async getServices(){
        return await fetch('/api/Service',
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
    }
    async getService(id){
        return await fetch('/api/Service/' + id , 
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }  
        })
        .then((resp) => resp.json())
    }
    async getServiceStop(id){
        return await fetch('/api/Service/' + id + '/Stop' , 
        {
            method: 'Post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }  
        })
        .then((resp) => resp.json())
    }
    async getServiceStart(id){
        return await fetch('/api/Service/' + id + '/Start' , 
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }  
        })
        .then((resp) => resp.json())
    }
    async getServiceRestart(id){
        return await fetch('/api/Service/' + id + '/Restart' , 
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }  
        })
        .then((resp) => resp.json())
    }
}
export default new ServiceRep();