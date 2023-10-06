/* const i_am_global = 42;

function local() {
    const i_am_local = 11;
    console.log(i_am_global)
}

{
    const i_am_blocked = 99;
    function a() {
        console.log(i_am_blocked)
    }
    function b() {
        console(i_am_blocked)
    }
}

function outer() {
    const t = 100;
    function inner() {
        console.log(i_am_global)
    }
    inner()
} */


////// JavaScript Scope Chain////////////

const i_am_global = 42

function mostOuter() {
    function outer() {
        function inner() {
            function mostInner() {
                function main() {
                    console.log(i_am_global)
                }
            }
        }
    }
}

