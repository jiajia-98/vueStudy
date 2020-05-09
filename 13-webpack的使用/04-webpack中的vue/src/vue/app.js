export default {
    template: `
    <div>
        <div>{{message}}</div>
        <button>按钮</button>
        <div>{{name}}</div>
    </div>
    `,
    data() {
        return {
            message: 'hello jiajia',
            name: 'djj'
        }
    },
    methods: {
        btnClick() {
            console.log(11);
        }
    },
}