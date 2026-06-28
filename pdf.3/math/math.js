document.addEventListener('DOMContentLoaded', function() {

    const quadA = document.getElementById('quadA');
    const quadB = document.getElementById('quadB');
    const quadC = document.getElementById('quadC');
    const quadBtn = document.getElementById('solveQuadraticBtn');
    const quadRes = document.getElementById('quadraticResult');

    function solveQuadratic() {
        let a = parseFloat(quadA.value) || 0;
        let b = parseFloat(quadB.value) || 0;
        let c = parseFloat(quadC.value) || 0;

        if (Math.abs(a) < 1e-12){
            if (Math.abs(b) < 1e-12) {
                quadRes.innerText = "Not A Valid EQUATION";
            } else {
                quadRes.innerText = `Linear: x = ${(-c / b).toFixed(4)}`;
            }
            return;
        }

        let delta = b * b - 4 * a *c;
        if (delta < 0) {
            let real = (-b / (2 * a)).toFixed(4);
            let imag = (Math.sqrt(-delta) / (2 * Math.abs(a))).toFixed(4);
            quadRes.innerText = `Complex: ${real} ± ${imag}i`;
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            quadRes.innerText = `x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
        }
    }

    if (quadBtn) quadBtn.addEventListener('click', solveQuadratic);
    solveQuadratic();

    const linA = document.getElementById('linA');
    const linB = document.getElementById('linB');
    const linBtn = document.getElementById('solveLinearBtn');
    const linRes = document.getElementById('linearResult');

    function solveLinear() {

        let a = parseFloat(linA.value) || 0;
        let b = parseFloat(linB.value)  || 0;
        if (a !== 0) {
            linRes.innerText = `x = ${(-b / a).toFixed(4)}`;
        } else {
            linRes.innerText = b === 0 ? "Infinite solutions" : "No solution";
        }
    }


    if(linBtn) linBtn.addEventListener('click', solveLinear);
    solveLinear();

    const sysBtn = document.getElementById('solveSystemBtn');
    const sysRes = document.getElementById('systemResult');

    function solveSystem() {
        
        let a1 = parseFloat(document.getElementById('sysA1').value) || 0;
        let b1 = parseFloat(document.getElementById('sysB1').value) || 0;
        let c1 = parseFloat(document.getElementById('sysC1').value) || 0;
        let a2 = parseFloat(document.getElementById('sysA2').value) || 1;
        let b2 = parseFloat(document.getElementById('sysB2').value) || -1;
        let c2 = parseFloat(document.getElementById('sysC2').value) || 0;

        let det = a1 * b2 - a2 * b1;
        if (Math.abs(det) < 1e-9 ) {
            sysRes.innerText = "No unique solution (det=0)";
            return;;
        }

        let x = (c1 * b2 - c2 * b1) / det;
        let y = (a1 * c2 - a2 * c1) / det;
        sysRes.innerText = `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}`;
    }

    if (sysBtn) sysBtn.addEventListener('click', solveSystem);
    solveSystem();

    const pythA = document.getElementById('pythLegA');
    const pythB = document.getElementById('pythLegB');
    const pythBtn = document.getElementById('pythagorasResult');
    const pythRes = document.getElementById('pythagorasResult');

      function calculatePythagorean() {
        let a = parseFloat(pythA.value) || 0;
        let b = parseFloat(pythB.value) || 0;
        pythRes.innerText = `c = ${Math.sqrt(a * a + b * b).toFixed(4)}`;
    }

    if (pythBtn) pythBtn.addEventListener('click', calculatePythagorean);
    calculatePythagorean();

    const circleRad = document.getElementById('circleRadius');
    const circleBtn = document.getElementById('circleBtn');
    const circleRes = document.getElementById('circleResult');

    function calculateCircle() {
        let r = parseFloat(circleRad.value) || 0;
        let area = Math.PI * r *r;
        let circ = 2 * Math.PI * r;
        circleRes.innerText =  `Area = ${area.toFixed(4)} | Circumference = ${circ.toFixed(4)}`;
    }

    if (circleBtn) circleBtn.addEventListener('click', calculateCircle);
    calculateCircle();


    const rectL = document.getElementById('rectLen');
    const rectW = document.getElementById('rectWid');
    const rectBtn = document.getElementById('rectBtn');
    const rectRes = document.getElementById('rectResult');

    function calculateRectangle() {
        let l = parseFloat(rectL.value) || 0;
        let w = parseFloat(rectW.value) || 0;
        rectRes.innerText = `Area = ${(l * w).toFixed(2)} | Perimeter = ${(2 * (l + w)).toFixed(2)}`;
    }

    if (rectBtn) rectBtn.addEventListener('click', calculateRectangle);
    calculateRectangle();

    const cubL = document.getElementById('cubL');
    const cubW = document.getElementById('cubW');
    const cubH = document.getElementById('cubH');
    const cubBth = document.getElementById('cuboidBtn');
    const cubRes = document.getElementById('cuboidResult');

    function calculateCuboid() {
        let l = parseFloat(cubL.value) || 0;
        let w = parseFloat(cubW.value) || 0;
        let h = parseFloat(cubH.value) || 0;
        let vol = l * w * h;
        let surf = 2 * (l * w + w * h + h * l);
        cubRes.innerText = `Volume = ${vol.toFixed(2)} | Surface = ${surf.toFixed(2)}`;
    }

    if (cubBth) cubBth.addEventListener('click', calculateCuboid);
    calculateCuboid();


    function calculateSphere() {
        let r = parseFloat(sphereR.value) || 0;
        let vol = (4 / 3) * Math.PI * r * r * r;  // Added r³
        let surf = 4 * Math.PI * r * r;
        sphereRes.innerText = `Volume = ${vol.toFixed(4)} | Surface = ${surf.toFixed(4)}`;
    }

    if (sphereBtn) sphereBtn.addEventListener('click', calculateSphere);
    calculateSphere();

    const cylR = document.getElementById('cylR');
    const cylH = document.getElementById('cylH');
    const cylBtn = document.getElementById('cylinderBtn');
    const cylRes = document.getElementById('cylinderResult');

    function calculateCylinder() {
        let r = parseFloat(cylR.value) || 0;
        let h = parseFloat(cylH.value) || 0;
        let vol = Math.PI * r * r * h;
        let surf = 2 * Math.PI * r * (r + h);
        cylRes.innerText = `Volume = ${vol.toFixed(4)} | Surface = ${surf.toFixed(4)}`;
    }

    if (cylBtn) cylBtn.addEventListener('click', calculateCylinder);
    calculateCylinder();


    const lenVal = document.getElementById('lenVal');
    const lenFrom = document.getElementById('lenFrom');
    const lenTo = document.getElementById('lenTo');
    const lenBtn = document.getElementById('lengthConvBtn');
    const lenRes = document.getElementById('lengthResult');

    function convertLength() {
        let val = parseFloat(lenVal.value) || 0;
        let inMeters = 0;

        if (lenFrom.value === 'm') inMeters = val;
        else if (lenFrom.value === 'cm') inMeters = val / 100;
        else if (lenFrom.value === 'mm') inMeters = val / 1000;

        let result = 0;
        if (lenTo.value === 'm') result = inMeters;
        else if (lenTo.value === 'cm') result = inMeters * 100;
        else if (lenTo.value === 'mm') result = inMeters * 1000;

        lenRes.innerText = `${val} ${lenFrom.value} = ${result.toFixed(4)} ${lenTo.value}`;
    }

    if (lenBtn) lenBtn.addEventListener('click', convertLength);
    convertLength();

    const areaVal = document.getElementById('areaVal');
    const areaFrom = document.getElementById('areaFrom');
    const areaTo = document.getElementById('areaTo');
    const areaBtn = document.getElementById('areaConvBtn');
    const areaRes = document.getElementById('areaResult');

    function convertArea() {
        let val = parseFloat(areaVal.value) || 0;
        let inSqm = (areaFrom.value === 'm2') ? val : val / 10000;
        let outVal = (areaTo.value === 'm2') ? inSqm : inSqm * 10000;
        areaRes.innerText = `${val} ${areaFrom.value} = ${outVal.toFixed(6)} ${areaTo.value}`;
    }

    if (areaBtn) areaBtn.addEventListener('click', convertArea);
    convertArea();

    const homeReturn = document.getElementById('returnHomeBtn');
    if (homeReturn) {
        homeReturn.addEventListener('click',  function(e) {
            e.preventDefault();
            alert("Return to main homepage. In production, you'd be redirected to index.html");
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

        });
    });
    console.log('MathMaster Loaded');
});