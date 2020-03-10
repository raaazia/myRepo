// function student()
var student= function(){
    this.name="raazia";
    this.age="20";
    this.email="info@gmail.com";

}
// prototype is usedto define some variable,method or attribute in existing function like oop inheritance
student.prototype={
    address:"fd",
    getname:function(){
        return this.name;
    }
}
 var st=new student();
// console.log(st.name);
// getname();
console.log(st.address)
console.log(st.getname());