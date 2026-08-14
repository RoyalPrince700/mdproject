import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { ChartDatum, ChartType } from '../../types/slide'

const COLORS = ['#0B1F3A', '#143356', '#C9A227', '#1c446e', '#5C6B7A']

interface Props {
  type: ChartType
  data: ChartDatum[]
  dark?: boolean
}

export function SlideChart({ type, data, dark = false }: Props) {
  const axis = dark ? '#F7F4EE' : '#5C6B7A'
  const grid = dark ? 'rgba(247,244,238,0.15)' : 'rgba(11,31,58,0.12)'
  const barFill = dark ? '#C9A227' : '#0B1F3A'

  if (type === 'pie') {
    return (
      <div className="slide-chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="42%"
              outerRadius="72%"
              paddingAngle={3}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="slide-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: axis, fontSize: 11 }}
            axisLine={{ stroke: grid }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: axis, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: '1px solid rgba(11,31,58,0.12)',
              fontSize: 12,
            }}
          />
          <Bar dataKey="value" fill={barFill} radius={[6, 6, 0, 0]} maxBarSize={56} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
