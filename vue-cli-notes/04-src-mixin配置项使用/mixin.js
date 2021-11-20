export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('@', 'mounted')
    }
}

export const mixin2 = {
    data() {
        return {
            x: 100
        }
    }
}