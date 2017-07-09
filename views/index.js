function render(weights) {

    // create html table
    let table = "";
    weights.forEach(function(weight) {
        table += "<tr><td>" + weight.date + "</td><td>" + weight.weight + "</td></tr>";
    });

    // html template
    let html =
    `
    <html>
        <head></head>

        <body>

            <table>
                <tr>
                    <th>Date</th>
                    <th>Weight</th>
                </tr>
                ${table}
            </table>

        </body>
    </html>
    `;

    return html;
}


// exports
exports.render = render;
