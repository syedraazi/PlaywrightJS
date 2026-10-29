const getresult=score => {
    if (score >70)
    { 
        return 'Pass';
    }
    else {
        return 'Fail';
    }
}
console.log(getresult(78));
console.log(getresult(43));