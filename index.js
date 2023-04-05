// code your solution here
function superbowlWin(record){
    let location = record.indexOf(record.find(r => r.result === 'W'));
    if(record.find(r => r.result === 'W')){
        return record[location].year;
    }
    else{
        return undefined;
    }
}