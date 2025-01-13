export function recognizeDevice(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    if(width > height){
        return 0;
    }
    else{
        if(width > 768){
            return  1;
        }
        else{
            return 2;
        }
    }
};
