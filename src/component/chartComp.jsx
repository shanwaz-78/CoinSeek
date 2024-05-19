import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts';
import { CircularProgress } from '@material-ui/core';

export class ChartComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Price: {
                options: {
                    chart: {
                        id: 'area-datetime',
                    },
                    grid: {
                        show: false
                    }, title: {
                        text: `Market Price (${this.props.currency})`,
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#b8d7ac"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#b8d7ac"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, selection: 365,
                },
                series: [
                    {
                        name: 'Market Price',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            , Market_Cap: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: `Market Cap (${this.props.currency})`,
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: '#778aa4'
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#778aa4"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }
                },
                series: [
                    {
                        name: 'Market Cap',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            ,
            Tot_Vol: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: "Market Volume",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#B1B2FF"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#B1B2FF"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    },
                },
                series: [
                    {
                        name: "Market Volume",
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }

        };
        this.prevSelection = this.state.Price.options.selection
    }
    preId = this.props.id;
    fetchData = async () => {
        let data = await fetch(`https://api.coingecko.com/api/v3/coins/${this.props.id}/market_chart?vs_currency=${this.props.currency}&days=${this.state.Price.options.selection}`)
        console.log(this.props.id)
        let jsonData = await data.json()
        this.setState({ Price: { options: this.state.Price.options, series: [{ name: 'Market Price', data: jsonData.prices }] } })
        this.setState({ Market_Cap: { options: this.state.Market_Cap.options, series: [{ name: 'Market Cap', data: jsonData.market_caps }] } })
        this.setState({ Tot_Vol: { options: this.state.Tot_Vol.options, series: [{ name: 'Total Volume', data: jsonData.total_volumes }] } })
    }




    componentDidMount() {
        this.fetchData()
        this.interval = setInterval(() => this.fetchData(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidUpdate() {
        if (this.prevId !== this.props.Id) {
            this.prevId = this.props.Id
            this.fetchData()
        }
        if (this.prevSelection !== this.state.Price.options.selection) {
            this.prevSelection = this.state.Price.options.selection
            this.fetchData()
        }
    }
    render() {
        return (
            <>
                <div className='all-chart' style={{ display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center' }}>

                    <div id="chart" style={{ width: '100%' }}>
                        <div className="toolbar" style={{ marginBottom: '20px' }}>
                            <button id="one_month"
                                className='days-button'
                                onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 1 }, series: this.state.Price.series } })}>
                                1D
                            </button>
                            &nbsp;
                            <button id="six_months"
                                className='days-button'
                                onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 7 }, series: this.state.Price.series } })}>
                                1W
                            </button>
                            &nbsp;
                            <button id="one_year"

                                className='days-button'
                                onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 30 }, series: this.state.Price.series } })}>
                                1M
                            </button>
                            &nbsp;
                            <button id="ytd"
                                className='days-button'
                                onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 182 }, series: this.state.Price.series } })}>
                                6M
                            </button>
                            &nbsp;
                            <button id="all"
                                className='days-button'
                                onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 365 }, series: this.state.Price.series } })}>
                                1Y
                            </button>
                        </div>
                        <Chart
                            options={this.state.Price.options}
                            series={this.state.Price.series}
                            type="area"
                            className='chart-1' />
                    </div>

                    <div className="col" style={{ display: 'flex', width: '80%', gap: '30px' }}>
                        <div className="chart-2" style={{ width: "50%", minWidth: '300px' }}  >
                            <Chart
                                options={this.state.Market_Cap.options}
                                series={this.state.Market_Cap.series}
                                type="line"

                            />
                        </div>
                        <div className="chart-2" style={{ width: "50%", minWidth: '300px' }} >
                            <Chart
                                options={this.state.Tot_Vol.options}
                                series={this.state.Tot_Vol.series}
                                type="line"
                            />
                        </div>
                    </div>
                </div>
               
            </>
        )
    }
}

export default ChartComp