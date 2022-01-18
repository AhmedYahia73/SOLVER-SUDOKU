let input0=document.querySelectorAll("input");
let btn=document.querySelector("button");
let myTest=false;
let myTest0=false;
let il=0;
let xx=0;
let xx0=0;
let arr3=[[10,10]];
btn.addEventListener("click",function(){
    let num0=true;
    let arr0;
    let arr=[
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]]
    ];
    let arr2=[
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]]
    ];
    
    function numNotUse(){ 
    //Not Use
    function notUse(){
        arr=[
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]]
    ];
    for(let x=0;x<arr.length;x++){
        for(let y=0;y<arr.length;y++){
            if((parseInt(input0[x*9+y].value)&&input0[x*9+y].value>0)||!parseInt(input0[x*9+y].value)){
                if(input0[x*9+y].style.backgroundColor!="green"&&input0[x*9+y].style.backgroundColor!="blue"){
            input0[x*9+y].style.backgroundColor="white";}
            if(!parseInt(input0[x*9+y].value)){
            for(let z=1;z<arr.length;z++){
                if(parseInt(input0[((x+z)*9+y)%input0.length].value)){
                    arr[x][y].push(input0[((x+z)*9+y)%input0.length].value);
                }
                if(parseInt(input0[(x*9+(y+z)%9)].value)){
                    arr[x][y].push(input0[(x*9+(y+z)%9)].value);
                }
                
              let xi=(z)/3;
              xi=parseInt(xi);
              let xii=(((x+xi)%3+parseInt(x/3)*3)*9+((y+z)%3+parseInt(y/3)*3));
                if(parseInt(input0[xii].value)){
                    arr[x][y].push(input0[xii].value);
                }
            }
        }
        }
    
        else{
            input0[x*9+y].style.backgroundColor="red";
        }
        }
    }}
    function use0(){
//Use
 arr2=[
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[],[]]
];
for(let x=0;x<arr.length;x++){
    for(let y=0;y<arr[x].length;y++){
        if(!parseInt(input0[x*9+y].value)){
        for(let i=1;i<=9;i++){
            for(let z=0;z<arr[x][y].length;z++){
                if(arr[x][y][z]==i){
                    break;
                }
                else if(z==arr[x][y].length-1){
                    arr2[x][y].push(i);
                }
            }
        }
        if(arr2[x][y].length==1&& myTest==true){
            input0[x*9+y].value=arr2[x][y][0];
            input0[x*9+y].style.backgroundColor="blue";
            num0=true;
            xx++;
        }
        else if(arr2[x][y].length==1){
            input0[x*9+y].value=arr2[x][y][0];
            input0[x*9+y].style.backgroundColor="green";
            num0=true;
            xx++;
        }
    }
    }
}}
notUse();
use0();
//Solution Part1
    let myT=false;
    //Part 2
    for(let x=0;x<arr2.length;x++){
        for(let y=0;y<arr2.length;y++){
            if(arr2[x][y].length>0 && input0[x*9+y].style.backgroundColor!="green"&& input0[x*9+y].style.backgroundColor!="blue"){
            for(let z=0;z<arr2[x][y].length;z++){
                let xt=0;
                let yt=0;
                let zt=0;
                for(let zi=0;zi<arr2.length;zi++){
                    for(let i=0;i<arr2.length;i++){
                        if((arr2[x][y][z]==arr2[x][zi][i] && zi!=y && i<arr2[x][zi].length)){
                            xt=1;
                        }
                        if((arr2[x][y][z]==arr2[zi][y][i] && zi!=x  && i<arr2[zi][y].length)){
                             yt=1;
                        }
                        if((arr2[x][y][z]==arr2[parseInt(x/3)*3+parseInt(zi/3)][parseInt(y/3)*3+zi%3][i])){
                            if( parseInt(y/3)*3+zi%3==y &&parseInt(x/3)*3+parseInt(zi/3)==x){
                                
                            } else{
                                zt=1;
                            }
                        }
                }
            }
            
            if((xt==0||yt==0||zt==0)&&myTest==true){
                input0[x*9+y].value=arr2[x][y][z];
                input0[x*9+y].style.backgroundColor="blue";
                myT=true;
                notUse();
                xx++;
                break;
            }
            else if(xt==0||yt==0||zt==0){
                input0[x*9+y].value=arr2[x][y][z];
                input0[x*9+y].style.backgroundColor="green";
                myT=true;
                notUse();
                xx++;
                break;
            }
            }
        }
        }
    }
    use0();
    while(num0){
        num0=false;
        numNotUse();
    }
    if(myT){
        numNotUse();
    }
}




numNotUse()
let arr1=[...arr2];
console.log(arr2);
fun(0,0);
arr0=[...arr2];
    //Solution Part2
    function fun(myx,myy){
for(let x=myx;x<9+myx;x++){
    for(let y=myy;y<9+myy;y++){
        if(arr2[x%9][y%9].length==2){
            console.log(input0[x*9+y].value);
            console.log(x+" y= "+y);
            arr0=[...arr2];
            part2(x%9,y%9);
        }
    }}
}
function part2(x,y){
    for(let x0=0;x0<arr3.length;x0++){
        if(arr3[x0][0]==x&&arr3[x0][1]==y){
            break;
        }if(x0==arr3.length-1){
            arr3.push([x,y]);
        }
    }
    myTest=true;
    myTest0=false;
                        input0[x*9+y].value=arr2[x][y][il%2];
                        input0[x*9+y].style.backgroundColor="blue";
                        numNotUse();
                        il++;
                        xx=0;
                        arr2=[...arr0];
                        for(let x0=0;x0<9;x0++){
                            for(let y0=0;y0<9;y0++){
                                if(input0[x0*9+y0].style.backgroundColor=="blue"){
                                    input0[x0*9+y0].value="";
                                    input0[x0*9+y0].style.backgroundColor="white";
                                }
                            }
                        }
                        let yy=xx;
                        xx=0;
                        input0[x*9+y].value=arr2[x][y][(il+1)%2];
                        input0[x*9+y].style.backgroundColor="blue";
                        numNotUse();
                        console.log("xx = "+xx+" yy = "+yy);
                        if(yy>xx){
                            arr2=[...arr0];
                            for(let x0=0;x0<9;x0++){
                                for(let y0=0;y0<9;y0++){
                                    if(input0[x0*9+y0].style.backgroundColor=="blue"){
                                        input0[x0*9+y0].value="";
                                        input0[x0*9+y0].style.backgroundColor="white";
                                    }
                                }
                            }
                            input0[x*9+y].value=arr2[x][y][il%2];
                            input0[x*9+y].style.backgroundColor="blue";
                            numNotUse();
                        }
                        
            for(let x0=0;x0<9;x0++){
                for(let y0=0;y0<9;y0++){
                    if(input0[x0*9+y0].style.backgroundColor=="blue"){
                        input0[x0*9+y0].style.backgroundColor="green";
                    }
                }
            }
            for(let x0=0;x0<9;x0++){
                for(let y0=0;y0<9;y0++){
                    if(input0[x0*9+y0].value==""){
                        fun(x,y+1);
                    }
                }
            }
            for(let x0=0;x0<9;x0++){
                for(let y0=0;y0<9;y0++){
                    if(input0[x0*9+y0].value==""){
                        myTest0=true;
                    }
                }
            }
            if(myTest0){
                
            }

            }

//Test
//Welcome To Egypt
})