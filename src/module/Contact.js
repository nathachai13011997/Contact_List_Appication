let GroupContact = require("../db/models/GroupContact")
let SubContact = require("../db/models/SubContact")
const { ErrorNotFound, ErrorBadRequest, ErrorUnauthorized } = require("../services/errorMethods.service")

const methods = {
  findGroup() {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(GroupContact)
      } catch (error) {
        reject(error)
      }
    })
  },

  deleteGroup(idGroupContact) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = GroupContact.find((e) => e.idGroupContact == idGroupContact)
        if (!obj) return reject(ErrorNotFound("idGroupContact: not found"))

        GroupContact = GroupContact.filter((e) => e.idGroupContact != idGroupContact)
        SubContact = SubContact.filter((e) => e.idGroupContact != idGroupContact)

        resolve()
      } catch (error) {
        console.log("error: ", error)
        reject(ErrorNotFound("idGroupContact: not found"))
      }
    })
  },

  insertGroup(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = GroupContact.find((e) => e.nameGroupContact == data.nameGroupContact)
        if (obj) return reject(ErrorUnauthorized("nameGroupContact: duplicate"))

        const idGroup = GroupContact[GroupContact.length - 1].idGroupContact + 1
        GroupContact.push({ idGroupContact: idGroup, nameGroupContact: data.nameGroupContact })
        resolve({ idGroupContact: idGroup, nameGroupContact: data.nameGroupContact })
      } catch (error) {
        reject(ErrorBadRequest(error.message))
      }
    })
  },

  updateGroup(idGroupContact, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = GroupContact.find((e) => e.idGroupContact == idGroupContact)
        if (!obj) return reject(ErrorNotFound("idGroupContact: not found"))

        const obj2 = GroupContact.find((e) => {
          if (e.nameGroupContact == data.nameGroupContact && e.idGroupContact != idGroupContact) {
            return e
          }
        })

        if (obj2) return reject(ErrorNotFound("nameGroupContact: duplicate"))

        GroupContact.map((e, i) => {
          if (e.idGroupContact == idGroupContact) {
            GroupContact[i].nameGroupContact = data.nameGroupContact
          }
          return e
        })

        resolve(Object.assign(obj))
      } catch (error) {
        reject(error)
      }
    })
  },

  // ----- Sub -----

  findByIdGroup(idGroupContact) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = SubContact.filter((e) => e.idGroupContact == idGroupContact)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  },

  deleteSub(idGroupContact, idSubContact) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = SubContact.find((e) => e.idGroupContact == idGroupContact)
        if (!obj) return reject(ErrorNotFound("idGroupContact not found"))

        const obj1 = SubContact.find((e) => e.idSubContact == idSubContact)
        if (!obj1) return reject(ErrorNotFound("idSubContact not found"))

        SubContact = SubContact.filter((e) => e.idSubContact != idSubContact)

        resolve()
      } catch (error) {
        reject(ErrorNotFound("idSubContact: not found"))
      }
    })
  },

  insertSub(idGroupContact, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = GroupContact.find((e) => e.idGroupContact == idGroupContact)
        if (!obj) return reject(ErrorNotFound("idGroupContact not found"))

        const obj2 = SubContact.find((e) => e.firstName == data.firstName && e.lastName == data.lastName)
        if (obj2) return reject(ErrorUnauthorized("firstName lastName duplicate"))

        const obj3 = SubContact.find((e) => e.phone == data.phone)
        if (obj3) return reject(ErrorUnauthorized("phone duplicate"))

        const obj4 = SubContact.find((e) => e.email == data.email)
        if (obj4) return reject(ErrorUnauthorized("email duplicate"))

        const obj5 = SubContact.find((e) => e.url == data.url)
        if (obj5) return reject(ErrorUnauthorized("url duplicate"))

        const idSub = SubContact[SubContact.length - 1].idSubContact + 1
        const dataInof = {
          idSubContact: idSub,
          idGroupContact: idGroupContact,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          url: data.url
        }
        SubContact.push(dataInof)
        resolve(dataInof)
      } catch (error) {
        reject(ErrorBadRequest(error.message))
      }
    })
  },

  updateSub(idGroupContact, idSubContact, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = SubContact.find((e) => e.idGroupContact == idGroupContact)
        if (!obj) return reject(ErrorNotFound("idGroupContact not found"))

        const obj1 = SubContact.find((e) => e.idSubContact == idSubContact)
        if (!obj1) return reject(ErrorNotFound("idSubContact not found"))

        const obj2 = SubContact.find((e) => {
          if (e.firstName == data.firstName && e.lastName == data.lastName && e.idSubContact != idSubContact) {
            return e
          }
        })
        if (obj2) return reject(ErrorNotFound("firstName lastName duplicate"))

        const obj3 = SubContact.find((e) => {
          if (e.phone == data.phone && e.idSubContact != idSubContact) {
            return e
          }
        })
        if (obj3) return reject(ErrorNotFound("phone duplicate"))

        const obj4 = SubContact.find((e) => {
          if (e.email == data.email && e.idSubContact != idSubContact) {
            return e
          }
        })
        if (obj4) return reject(ErrorNotFound("email duplicate"))

        const obj5 = SubContact.find((e) => {
          if (e.url == data.url && e.idSubContact != idSubContact) {
            return e
          }
        })
        if (obj5) return reject(ErrorNotFound("url duplicate"))

        SubContact.map((e, i) => {
          if (e.idSubContact == idSubContact) {
            SubContact[i].firstName = data.firstName
            SubContact[i].lastName = data.lastName
            SubContact[i].phone = data.phone
            SubContact[i].email = data.email
            SubContact[i].url = data.url
          }
          return e
        })

        resolve(Object.assign(obj))
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = { ...methods }
