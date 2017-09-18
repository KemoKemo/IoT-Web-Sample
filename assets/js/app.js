Vue.use(VueMaterial);

// TODO: サービス実行時に外部の設定ファイルから値を受け取りたい
const baseURI = 'http://localhost:5000/api/v1';

let tempmon = new Vue({
    el: '#tempmon',
    data: {
        name: 'Sensor',
        gauge: null,
        message: '',
    },
    methods: {
        init: function() {
            this.gauge = new LinearGauge({
                renderTo: 'gauge-id',
                colorNumbers: 'red',
                minValue: -10,
                maxValue: 50,
                majorTicks: [-10, 0, 10, 20, 30, 40, 50],
                highlights: [{
                    "from": 30,
                    "to": 50,
                    "color": "rgba(200, 50, 50, .75)"
                }],
                width: 200,
                height: 400,
            });
        },
        getData: function() {
            axios.get(baseURI + '/sensors')
                .then((response) => {
                    let sensors = response.data['sensor-list'];
                    this.name = 'Sensor: ' + sensors[0].name;
                    this.gauge.value = sensors[0].temp_c;
                    this.message = '';
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
