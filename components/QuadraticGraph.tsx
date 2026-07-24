"use client";

import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function QuadraticGraph() {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);

  // x값의 범위를 -10부터 10까지 0.5 간격으로 생성하고 그에 따른 y값을 계산
  const data = useMemo(() => {
    const points = [];
    for (let x = -10; x <= 10; x += 0.5) {
      points.push({
        x: x,
        y: a * x * x + b * x + c,
      });
    }
    return points;
  }, [a, b, c]);

  return (
    <div className="w-full flex flex-col items-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 
        그래프 영역:
        부드러운 모서리(rounded-2xl)와 얇은 외곽선(border), 은은한 배경색 적용 
      */}
      <div className="w-full max-w-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          <span className="text-blue-500 font-mono text-2xl tracking-tighter">
            y = {a === 1 ? "" : a === -1 ? "-" : a}x² 
            {b !== 0 ? (b > 0 ? ` + ${b}x` : ` - ${Math.abs(b)}x`) : ""} 
            {c !== 0 ? (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`) : ""}
          </span>
        </h2>
        
        <div className="w-full h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="x" 
                type="number" 
                domain={[-10, 10]} 
                tickCount={21}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis 
                domain={["auto", "auto"]}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                labelFormatter={(label) => `x = ${label}`}
                formatter={(value: any) => [Number(value).toFixed(2), 'y']}
              />
              <ReferenceLine x={0} stroke="#9ca3af" strokeWidth={1} />
              <ReferenceLine y={0} stroke="#9ca3af" strokeWidth={1} />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 조작 패널 영역 */}
      <div className="w-full max-w-2xl bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col gap-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          계수 조절 (Parameters)
        </h3>
        
        {/* 슬라이더: a */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label className="font-medium text-gray-700">a (이차항 계수)</label>
            <span className="w-16 text-center text-sm bg-gray-50 border border-gray-100 rounded-md py-1 font-mono text-gray-700">{a}</span>
          </div>
          <input 
            type="range" 
            min="-5" max="5" step="0.5" 
            value={a} 
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-200 rounded-lg appearance-none"
          />
        </div>

        {/* 슬라이더: b */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label className="font-medium text-gray-700">b (일차항 계수)</label>
            <span className="w-16 text-center text-sm bg-gray-50 border border-gray-100 rounded-md py-1 font-mono text-gray-700">{b}</span>
          </div>
          <input 
            type="range" 
            min="-10" max="10" step="1" 
            value={b} 
            onChange={(e) => setB(parseInt(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-200 rounded-lg appearance-none"
          />
        </div>

        {/* 슬라이더: c */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label className="font-medium text-gray-700">c (상수항)</label>
            <span className="w-16 text-center text-sm bg-gray-50 border border-gray-100 rounded-md py-1 font-mono text-gray-700">{c}</span>
          </div>
          <input 
            type="range" 
            min="-20" max="20" step="1" 
            value={c} 
            onChange={(e) => setC(parseInt(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-200 rounded-lg appearance-none"
          />
        </div>
      </div>
    </div>
  );
}
