
class ENV{
    constructor(){
        this.dictionary={
            express_port:9678,
            express_host:"localhost",
        }
    }
    get(name){
        const toReturn=this.dictionary[name];
        if(undefined==toReturn){
            throw `Not found Env: ${name}`;
        }
        return toReturn;
    }
};

module.exports=new ENV();