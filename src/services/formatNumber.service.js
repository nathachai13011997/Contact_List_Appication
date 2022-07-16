const methods = {
    formatNumber(data){
        try {
            return (data).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        }catch(error){
            throw new Error(error)
        }
        
    }
}

module.exports = { ...methods }