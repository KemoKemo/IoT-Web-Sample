Vue.use(VueMaterial);

let tempmon = new Vue({
    el: '#tempmon',
    data: {
        message: 'JSON data will be here! ',
        sensors: []
    },
    methods: {
        getData: function() {
            axios.get('http://localhost:5000/api/v1/sensors')
                .then((response) => {
                    this.sensors = response.data['sensor-list'];
                    this.message = this.sensors;
                })
                .catch((error) => {
                    this.message = error;
                });
        }
    }
});
