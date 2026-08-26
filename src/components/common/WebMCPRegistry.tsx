'use client';

import { useEffect } from 'react';

/**
 * WebMCP (Web Model Context Protocol) tool registry
 * Implements standard browser-native agentic tools via navigator.modelContext
 */
export default function WebMCPRegistry() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && 'modelContext' in navigator) {
        const mc = (navigator as unknown as {
          modelContext: {
            registerTool: (tool: {
              name: string;
              description: string;
              inputSchema: object;
              execute?: (args: Record<string, unknown>) => Promise<unknown> | unknown;
            }) => void;
          };
        }).modelContext;

        if (mc && typeof mc.registerTool === 'function') {
          // Tool 1: SIP Calculator
          mc.registerTool({
            name: 'calculate_sip',
            description: 'Calculate future wealth and returns for a Monthly SIP in Mutual Funds',
            inputSchema: {
              type: 'object',
              properties: {
                monthlyInvestment: { type: 'number', description: 'Monthly investment amount in INR' },
                expectedReturnRate: { type: 'number', description: 'Expected annual return percentage (e.g. 12)' },
                timePeriodYears: { type: 'number', description: 'Investment horizon in years' }
              },
              required: ['monthlyInvestment', 'expectedReturnRate', 'timePeriodYears']
            },
            execute: async ({ monthlyInvestment, expectedReturnRate, timePeriodYears }) => {
              const P = Number(monthlyInvestment);
              const r = Number(expectedReturnRate) / 100 / 12;
              const n = Number(timePeriodYears) * 12;
              const totalInvested = Math.round(P * n);
              const futureValue = Math.round(P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
              const estimatedReturns = futureValue - totalInvested;
              return { totalInvested, estimatedReturns, futureValue };
            }
          });

          // Tool 2: Lumpsum Calculator
          mc.registerTool({
            name: 'calculate_lumpsum',
            description: 'Calculate compounded growth for a one-time lump sum mutual fund investment',
            inputSchema: {
              type: 'object',
              properties: {
                investmentAmount: { type: 'number', description: 'One-time investment in INR' },
                expectedReturnRate: { type: 'number', description: 'Annual return rate percentage' },
                timePeriodYears: { type: 'number', description: 'Tenure in years' }
              },
              required: ['investmentAmount', 'expectedReturnRate', 'timePeriodYears']
            },
            execute: async ({ investmentAmount, expectedReturnRate, timePeriodYears }) => {
              const P = Number(investmentAmount);
              const r = Number(expectedReturnRate) / 100;
              const t = Number(timePeriodYears);
              const futureValue = Math.round(P * Math.pow(1 + r, t));
              const estimatedReturns = futureValue - P;
              return { totalInvested: P, estimatedReturns, futureValue };
            }
          });

          // Tool 3: FD Calculator
          mc.registerTool({
            name: 'calculate_fd',
            description: 'Calculate maturity value and interest for fixed deposits with quarterly compounding',
            inputSchema: {
              type: 'object',
              properties: {
                depositAmount: { type: 'number', description: 'Deposit amount in INR' },
                interestRate: { type: 'number', description: 'Annual interest rate percentage' },
                tenureYears: { type: 'number', description: 'Deposit tenure in years' }
              },
              required: ['depositAmount', 'interestRate', 'tenureYears']
            },
            execute: async ({ depositAmount, interestRate, tenureYears }) => {
              const P = Number(depositAmount);
              const r = Number(interestRate) / 100;
              const t = Number(tenureYears);
              const n = 4; // Quarterly compounding
              const maturityAmount = Math.round(P * Math.pow(1 + r / n, n * t));
              const totalInterest = maturityAmount - P;
              return { depositAmount: P, totalInterest, maturityAmount };
            }
          });

          // Tool 4: EMI Calculator
          mc.registerTool({
            name: 'calculate_emi',
            description: 'Calculate monthly loan EMI and total interest payable',
            inputSchema: {
              type: 'object',
              properties: {
                loanAmount: { type: 'number', description: 'Total loan amount in INR' },
                interestRate: { type: 'number', description: 'Annual loan interest rate percentage' },
                tenureYears: { type: 'number', description: 'Loan tenure in years' }
              },
              required: ['loanAmount', 'interestRate', 'tenureYears']
            },
            execute: async ({ loanAmount, interestRate, tenureYears }) => {
              const P = Number(loanAmount);
              const r = Number(interestRate) / 12 / 100;
              const n = Number(tenureYears) * 12;
              const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
              const totalPayment = emi * n;
              const totalInterest = totalPayment - P;
              return { monthlyEmi: emi, totalInterest, totalPayment };
            }
          });

          // Tool 5: Get Services Catalog
          mc.registerTool({
            name: 'get_services',
            description: 'List all financial services offered by Stockstrail in India',
            inputSchema: { type: 'object', properties: {} },
            execute: async () => {
              return {
                services: [
                  { name: 'Mutual Funds & SIPs', url: 'https://www.stockstrail.in/mutual-funds' },
                  { name: 'Fixed Deposits', url: 'https://www.stockstrail.in/fixed-deposit' },
                  { name: 'Life & Health Insurance', url: 'https://www.stockstrail.in/insurance' },
                  { name: 'Loans Against Mutual Funds (LAMF)', url: 'https://www.stockstrail.in/loan' },
                  { name: 'Risk Profile Assessment', url: 'https://www.stockstrail.in/check-risk-profile' },
                  { name: 'Open Demat Account', url: 'https://www.stockstrail.in/open-demat' }
                ]
              };
            }
          });
        }
      }
    } catch {
      // Graceful fallback if browser environment does not support modelContext
    }
  }, []);

  return null;
}
