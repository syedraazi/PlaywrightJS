class TestRunner{
        static totalTests = 0;
        static passCount = 0;
        constructor(name, passed){
            this.name = name;
            TestRunner.totalTests++;
            if(passed){
                TestRunner.passCount++;
            }
        }
}
let t1 = new TestRunner("loginTest", true);//totalTests=1;passCount=1  
let t2 = new TestRunner("signTest", false);//totalTests=2;passCount=1
let t3 = new TestRunner("dashboardTest", true);//totalTests=3;passCount=2
let t4 = new TestRunner("supportTest", true);//totalTests=4;passCount=3
console.log(TestRunner.totalTests); // 4 
console.log(TestRunner.passCount); // 3
console.log(t1.name);//loginTest
console.log(t2.name);//signTest
console.log(t3.name);//dashboardTest
console.log(t4.name);//supportTest

// name,passed - non static
// totalTests, passCount - static