import clear_day from "../assets/clear_day.svg";
import cloudy from "../assets/cloudy.svg";
import drizzle from "../assets/drizzle.svg";
import flurries from "../assets/flurries.svg";
import fog_light from "../assets/fog_light.svg";
import fog from "../assets/fog.svg";
import freezing_drizzle from "../assets/freezing_drizzle.svg";
import freezing_rain_heavy from "../assets/freezing_rain_heavy.svg";
import freezing_rain_light from "../assets/freezing_rain_light.svg";
import freezing_rain from "../assets/freezing_rain.svg";
import ice_pellets_heavy from "../assets/ice_pellets_heavy.svg";
import ice_pellets_light from "../assets/ice_pellets_light.svg";
import ice_pellets from "../assets/ice_pellets.svg";
import mostly_clear_day from "../assets/mostly_clear_day.svg";
import mostly_cloudy from "../assets/mostly_cloudy.svg";
import partly_cloudy_day from "../assets/partly_cloudy_day.svg";
import rain_heavy from "../assets/rain_heavy.svg";
import rain_light from "../assets/rain_light.svg";
import rain from "../assets/rain.svg";
import snow_heavy from "../assets/snow_heavy.svg";
import snow_light from "../assets/snow_light.svg";
import snow from "../assets/snow.svg";
import tstorm from "../assets/tstorm.svg";

const codes = {
    4201: rain_heavy,
    4001: rain,
    4200: rain_light,
    6201: freezing_rain_heavy,
    6001: freezing_rain,
    6200: freezing_rain_light,
    6000: freezing_drizzle,
    4000: drizzle,
    7101: ice_pellets_heavy,
    7000: ice_pellets,
    7102: ice_pellets_light,
    5101: snow_heavy,
    5000: snow,
    5100: snow_light,
    5001: flurries,
    8000: tstorm,
    2100: fog_light,
    2000: fog,
    1001: cloudy,
    1102: mostly_cloudy,
    1101: partly_cloudy_day,
    1100: mostly_clear_day,
    1000: clear_day
}

export default codes;