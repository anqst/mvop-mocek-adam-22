function RouteItem(props) {

    // console.log(props.data)

    function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }

    function invertColor(hex, bw) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        var r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        if (bw) {
            // https://stackoverflow.com/a/3943023/112731
            return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                ? '#000000'
                : '#FFFFFF';
        }
        // invert color components
        r = (255 - r).toString(16);
        g = (255 - g).toString(16);
        b = (255 - b).toString(16);
        // pad each with zeros and return
        return "#" + padZero(r) + padZero(g) + padZero(b);
    }

    return (
        <div style={{
            "backgroundColor": `#${props.data.route_color}`,
            "color": `${invertColor(props.data.route_color, true)}`
        }} className="rounded-sm p-6 flex flex-col items-center gap-12 text-center">
            <p className="text-lg font-bold">{props.data.route_long_name}</p>
            <p>{props.data.route_short_name}</p>
            <a className="underline" href={props.data.route_url} target="_blank">{props.data.route_url}</a>
        </div>
    );
}

export default RouteItem
