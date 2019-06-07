(function(){
    const SUBJECT = "some strings";
    let s = SUBJECT.split('');
    for(let ptr1=0, l=SUBJECT.length,ptr2=l-1,half=Math.floor(l/2),i=0,t; i<half; i++){
        t=s[ptr1];
        s[ptr1] = s[ptr2];
        s[ptr2] = t;
        ptr1++;
        ptr2--;
    }
    console.log(s);
})();
