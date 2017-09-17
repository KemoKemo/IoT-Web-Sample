Vue.use(VueMaterial);

Vue.component('sensor-gauge', {
    template: '<canvas id="gauge-id" data-type="linear-gauge" data-color-numbers="red" data-width="200" data-height="400"></canvas>'
})

let tempmon = new Vue({
    el: '#tempmon',
    data: {
        message: 'JSON data will be here! ',
        gauge: null,
        sensors: []
    },
    methods: {
        init: function() {
            this.gauge = new LinearGauge({
                renderTo: 'gauge-id',
                colorNumbers: 'red',
                width: 100,
                height: 300,
            });
        },
        getData: function() {
            axios.get('http://localhost:5000/api/v1/sensors')
                .then((response) => {
                    this.sensors = response.data['sensor-list'];
                    this.message = this.sensors[0].temp_c;
                    this.gauge.draw();
                    this.gauge.value = "20.9";
                })
                .catch((error) => {
                    this.message = error;
                });
        }
    }
});

window.onload = function() {
    tempmon.init();
}
