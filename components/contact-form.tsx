'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { Arrow } from './icons';

export function ContactForm({ defaultService = '' }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const next: Record<string, string> = {};
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    if (!name) next.name = 'Enter your name.';
    if (!email) next.email = 'Enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
    if (!message) next.message = 'Describe how we can help.';
    return next;
  }

  if (submitted) {
    return (
      <div className="border border-line bg-chalk p-8" role="status">
        <h2 className="display text-3xl">Message saved in this browser session.</h2>
        <p className="mt-4 leading-7 text-mist">
          This form is frontend-ready. It does not send email yet, because no backend or form
          provider is connected. Please use phone, WhatsApp or email until that integration is in place.
        </p>
      </div>
    );
  }

  return (
    <form
      className="border border-line bg-chalk p-6 sm:p-8"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const next = validate(event.currentTarget);
        setErrors(next);
        if (Object.keys(next).length === 0) setSubmitted(true);
      }}
    >
      <h2 className="display text-3xl">Tell us about the brief</h2>
      <p className="mt-2 text-sm text-mist">
        Required fields are marked <span className="text-moss">*</span>.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" required error={errors.email} autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <label className="text-sm font-semibold">
          Organisation
          <input
            name="organisation"
            autoComplete="organization"
            className="mt-2 w-full border border-line bg-paper p-3 font-normal"
          />
        </label>
        <label className="text-sm font-semibold sm:col-span-2">
          Service of interest
          <select
            name="service"
            defaultValue={defaultService}
            className="mt-2 w-full border border-line bg-paper p-3 font-normal"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold sm:col-span-2">
          How can we help? <span className="text-moss">*</span>
          <textarea
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`mt-2 w-full border bg-paper p-3 font-normal ${errors.message ? 'border-red-500' : 'border-line'}`}
          />
          {errors.message ? (
            <span id="message-error" className="mt-1 block text-xs font-normal text-red-700" role="alert">
              {errors.message}
            </span>
          ) : null}
        </label>
      </div>
      <button className="button button-primary mt-6" type="submit">
        Send enquiry <Arrow />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="text-sm font-semibold">
      {label} {required ? <span className="text-moss">*</span> : null}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 w-full border bg-paper p-3 font-normal ${error ? 'border-red-500' : 'border-line'}`}
      />
      {error ? (
        <span id={errorId} className="mt-1 block text-xs font-normal text-red-700" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
