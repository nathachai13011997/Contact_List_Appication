let GroupContact = require('../db/models/GroupContact')
let SubContact = require('../db/models/SubContact')
const { ErrorNotFound, ErrorBadRequest, ErrorUnauthorized } = require('../configs/errorMethods');

const methods = {

    findGroup() {
        return new Promise( async (resolve, reject) => {
            try {
                resolve(GroupContact)
            } catch(error) {
                reject(error)
            }
        } )
    },

    deleteGroup(idGroupContact) {
        return new Promise( async (resolve, reject) => {
            try {
                const obj = GroupContact.find(e => e.idGroupContact == idGroupContact)
                if(!obj) return reject(ErrorNotFound('idGroupContact: not found'))

                GroupContact = GroupContact.filter(e => e.idGroupContact != idGroupContact)
                SubContact = SubContact.filter(e => e.idGroupContact != idGroupContact)

                resolve()
            } catch(error) {
                console.log('error: ', error);
                reject(ErrorNotFound('idGroupContact: not found'))
            }
        })
    },

    insertGroup(data) {
        return new Promise( async (resolve, reject) => {
            try {
                const obj = GroupContact.find(e => e.nameGroupContact == data.nameGroupContact)
                if(obj) return reject(ErrorUnauthorized('nameGroupContact: duplicate')) 

                    const idGroup = GroupContact[GroupContact.length - 1].idGroupContact + 1
                    GroupContact.push({ idGroupContact: idGroup, nameGroupContact: data.nameGroupContact })
                    resolve({ idGroupContact: idGroup, nameGroupContact: data.nameGroupContact })
                
            } catch(error) {
                reject(ErrorBadRequest(error.message))
            }
        } )
    },

    updateGroup(idGroupContact, data) {
        return new Promise( async (resolve, reject) => {
            try {
                const obj = GroupContact.find(e => e.idGroupContact == idGroupContact)
                if(!obj) return reject(ErrorNotFound('idGroupContact: not found'))

                const obj2 = GroupContact.find(e => { 
                    if(e.nameGroupContact == data.nameGroupContact && e.idGroupContact != idGroupContact){
                        return e
                    } 
                })

                if(obj2) return reject(ErrorNotFound('nameGroupContact: duplicate')) 

                GroupContact.map((e, i)=> {
                    if(e.idGroupContact == idGroupContact){
                       GroupContact[i].nameGroupContact = data.nameGroupContact
                    }
                    return e
                })

                resolve(Object.assign(obj))
            } catch(error) {
                reject(error)

            }
        } )
    },

    // ----- Sub -----
    
    findByIdGroup(idGroupContact) {
        return new Promise( async (resolve, reject) => {
            try {
                
                    const result = SubContact.filter(e => e.idGroupContact == idGroupContact)
                    resolve(result)
                
            } catch(error) {
                reject(error)
            }
        } )
    },

deleteSub(idSubContact) {
    return new Promise( async (resolve, reject) => {
        try {
            const obj = SubContact.find(e => e.idSubContact == idSubContact)
            if(!obj) return reject(ErrorNotFound('idSubContact: not found'))

            SubContact = SubContact.filter(e => e.idSubContact != idSubContact)

            resolve()
        } catch(error) {
            reject(ErrorNotFound('idSubContact: not found'))
        }
    })
},

insertSub(idGroupContact, data) {
    return new Promise( async (resolve, reject) => {
        try {
            const obj = GroupContact.find(e => e.idGroupContact == idGroupContact)
            if(!obj) return reject(ErrorNotFound('idGroupContact: not found'))

            const obj2 = SubContact.find(e => e.nameSubContact == data.nameSubContact)
            if(obj2) return reject(ErrorUnauthorized('nameSubContact: duplicate')) 
            
                const idSub = SubContact[SubContact.length - 1].idSubContact + 1
                SubContact.push({ idSubContact: idSub, idGroupContact: idGroupContact, nameSubContact: data.nameSubContact })
                resolve({ idSubContact: idSub, idGroupContact: idGroupContact, nameSubContact: data.nameSubContact })
        } catch(error) {
            reject(ErrorBadRequest(error.message))
        }
    } )
},

updateSub(idSubContact, data) {
    return new Promise( async (resolve, reject) => {
        try {

            const obj = SubContact.find(e => e.idSubContact == idSubContact)
            if(!obj) return reject(ErrorNotFound('idSubContact: not found'))

            const obj2 = SubContact.find(e => { 
                if(e.nameSubContact == data.nameSubContact && e.idSubContact != idSubContact){
                    return e
                } 
            })

            if(obj2) return reject(ErrorNotFound('nameSubContact: duplicate')) 

            SubContact.map((e, i)=> {
                if(e.idSubContact == idSubContact){
                    SubContact[i].nameSubContact = data.nameSubContact
                }
                return e
            })

            resolve(Object.assign(obj))
        } catch(error) {
            reject(error)

        }
    } )
},

}

module.exports = { ...methods }