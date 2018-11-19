import axios from 'axios';

export default {
    validateGamerTag(data){
//https://bo4tracker.com/api/validate/bo4/beardedM0nk3y/xbl
    },
    getGamerData(gamerTag) {
//https://bo4tracker.com/api/stats/bo4/beardedM0nk3y/xbl
        var apiURL = `https://bo4tracker.com/api/stats/bo4/${gamerTag}/xbl?type=blackout`

        return axios.get(apiURL).then(function(response){
            return response;
        })
    }
};