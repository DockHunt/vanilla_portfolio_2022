const sections = document.querySelectorAll('.section');
const sect_btns = document.querySelectorAll('.controls');
const sect_btn = document.querySelectorAll('.control');
const all_sections = document.querySelector('.main-content');

function PageTransitions() {
    //button click active class
    for (let i = 0; i < sect_btn.length; i++) {
        sect_btn[i].addEventListener('click', function () {
            let current_btn = document.querySelectorAll('.active-btn');
            current_btn[0].className = current_btn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections active class
    all_sections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //make all buttons not active
            sect_btns.forEach((btn) => {
                btn.classList.remove('active')
            })
            //then make clicked button active button
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();