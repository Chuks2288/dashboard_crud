export interface PieChartProps {
    title: string,
    value: number,
    series: Array<number>
    colors: Array<string>
}


export interface ProgressBarProps {
    title: string,
    percentage: number,
    color: string,
}