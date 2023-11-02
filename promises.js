const moneyTransfer = ({to,amount}) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('transferd');
        resolve();
    },2000);
});
const onSucess = () => console.log('done');

moneyTransfer('preet',2000).then(onSucess);