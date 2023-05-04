export default (State, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...State,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            break
        default:
            return State;
    }
}