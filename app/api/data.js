import axios from "axios";

const prepCards = (data) => {
    const colors = ['#DDEFE0', '#F4ECDD', '#EFDADA', '#DEE0EF'];
    const icons = ['/revenues.png', '/total.png', '/likes.png', '/userss.png']
    const labels = ['Total Revenues', 'Total Transactions', 'Total Likes', 'Total Users']
    let cards = []

    for(let i=0; i<data.cards.length; i++){
        cards.push({
            delay: i*100,
            value: data.cards[i],
            color: colors[i],
            label: labels[i],
            icon: icons[i]
        })
    }

    return cards
}

const prePie = (data) => {
    const colors = ['#98D89E', '#F6DC7D', '#EE8484']
    const labels = ['Basic Tees', 'Custom Short Pants', 'Super Hoodies']
    
    return {
        labels,
        colors,
        values: [data.pie.basic_tees, data.pie.short_pants, data.pie.super_hoodies]
    }
}

const prepChart = (data) => {
    return {
        labels: data.chart.labels,
        data1: data.chart.data1,
        data2: data.chart.data2
        
    }
}

export const refresh = () => {
    return new Promise(async (resolve, reject) => {

        await axios.get(`https://selseus.com/refresh`)
        .then((response) => {
            resolve({
                cards: prepCards(response.data),
                schedule: response.data.schedule,
                pie: prePie(response.data),
                chart: prepChart(response.data)
            });
        })
        .catch((error) => {
            reject(error);
        });
    });
}