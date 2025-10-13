import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';

export default function PaymentStatus() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get('payment');
  const reference = searchParams.get('reference');

  const getStatusInfo = () => {
    switch (status) {
      case 'success':
        return {
          icon: <CheckCircle className="w-16 h-16 text-green-500" />,
          title: 'Payment Successful!',
          description: `Your booking has been confirmed. Reference: ${reference}`,
          color: 'text-green-700'
        };
      case 'failed':
        return {
          icon: <XCircle className="w-16 h-16 text-red-500" />,
          title: 'Payment Failed',
          description: 'Your payment could not be processed. Please try again.',
          color: 'text-red-700'
        };
      case 'cancelled':
        return {
          icon: <AlertCircle className="w-16 h-16 text-yellow-500" />,
          title: 'Payment Cancelled',
          description: 'You cancelled the payment process.',
          color: 'text-yellow-700'
        };
      default:
        return {
          icon: <XCircle className="w-16 h-16 text-gray-500" />,
          title: 'Payment Error',
          description: 'Something went wrong. Please contact support.',
          color: 'text-gray-700'
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {statusInfo.icon}
          </div>
          <CardTitle className={`text-2xl ${statusInfo.color}`}>
            {statusInfo.title}
          </CardTitle>
          <CardDescription className="text-base">
            {statusInfo.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {status === 'success' && reference && (
            <div className="bg-muted p-4 rounded-lg text-sm">
              <p className="font-semibold mb-1">Booking Reference:</p>
              <p className="font-mono">{reference}</p>
              <p className="text-muted-foreground mt-2 text-xs">
                Please save this reference number for your records.
              </p>
            </div>
          )}
          <Button onClick={() => navigate('/')} className="w-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
