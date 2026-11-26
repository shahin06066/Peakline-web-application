import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { business, serviceOptions } from "../lib/site";
import { Icon } from "./Icon";

type Variant = "card" | "full";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  notes: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: serviceOptions[0],
  notes: "",
};

const DRAFT_KEY = "peakline-inspection-draft";

function formatPhone(raw: string) {
  const digits = raw
    .replace(/\D/g, "")
    .replace(/^1(?=\d{10}$)/, "")
    .slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function loadDraft(defaultService: string): FormValues {
  const fallback: FormValues = { ...emptyValues, service: defaultService };
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<FormValues>;
    const service =
      typeof parsed.service === "string" && serviceOptions.includes(parsed.service)
        ? parsed.service
        : defaultService;
    return {
      name: typeof parsed.name === "string" ? parsed.name : "",
      phone: typeof parsed.phone === "string" ? parsed.phone : "",
      email: typeof parsed.email === "string" ? parsed.email : "",
      address: typeof parsed.address === "string" ? parsed.address : "",
      notes: typeof parsed.notes === "string" ? parsed.notes : "",
      service,
    };
  } catch {
    return fallback;
  }
}

function clearDraft() {
  try {
    window.sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* storage unavailable — no-op */
  }
}

export function InspectionForm({
  variant = "card",
  defaultService,
  className = "",
  compactHeading = false,
}: {
  variant?: Variant;
  defaultService?: string;
  className?: string;
  compactHeading?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const [values, setValues] = useState<FormValues>(() =>
    loadDraft(defaultService ?? emptyValues.service),
  );
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const submittedRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "idle") return;
    try {
      const hasInput = Boolean(
        values.name || values.phone || values.email || values.address || values.notes,
      );
      if (hasInput) {
        window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(values));
      } else {
        window.sessionStorage.removeItem(DRAFT_KEY);
      }
    } catch {
      /* storage unavailable — no-op */
    }
  }, [values, status]);

  const update = (field: keyof FormValues, value: string) => {
    const next = field === "phone" ? formatPhone(value) : value;
    setValues((prev) => ({ ...prev, [field]: next }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (values.address.trim().length < 4)
      next.address = "Add your property address or ZIP code.";
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const el = submittedRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");
    clearDraft();
    window.setTimeout(() => {
      setStatus("success");
      window.setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 60);
    }, 750);
  };

  const reset = () => {
    clearDraft();
    setValues({ ...emptyValues, service: defaultService ?? emptyValues.service });
    setErrors({});
    setStatus("idle");
    window.setTimeout(() => {
      submittedRef.current?.querySelector<HTMLInputElement>("[name='name']")?.focus();
    }, 60);
  };

  const fieldClass = "field";
  const labelClass = "field-label";

  if (status === "success") {
    return (
      <div
        ref={successRef}
        aria-live="polite"
        className={`rounded-2xl border border-pine-950/10 bg-bone-50 p-7 text-pine-950 shadow-[0_30px_60px_-30px_rgba(14,31,25,0.5)] sm:p-9 ${className}`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pine-900 text-bone-50">
          <Icon name="check" className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="display mt-6 text-[1.9rem] leading-tight">Request received.</h3>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-pine-950/65">
          Thank you, {values.name.split(" ")[0] || "neighbor"}. Your {values.service.toLowerCase()} request is
          in. A member of our Denver team will reach out within <strong className="font-semibold text-pine-950">1 business hour</strong> to
          confirm a time that works for you.
        </p>
        <div className="mt-6 rounded-xl border border-pine-950/10 bg-white px-4 py-3.5 text-[0.8rem] text-pine-950/70">
          <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-pine-950/45">
            Inspection line
          </span>
          <a href={business.phoneHref} className="mt-1 inline-flex items-center gap-2 font-semibold text-pine-950">
            <Icon name="phone" className="h-3.5 w-3.5 text-clay-500" />
            {business.phoneDisplay}
          </a>
          <span className="mt-1 block text-[0.74rem] text-pine-950/50">{business.hours} · {business.hoursTime}</span>
        </div>
        <button type="button" onClick={reset} className="btn btn-outline btn-sm mt-6">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-pine-950/10 bg-bone-50 p-6 shadow-[0_30px_60px_-30px_rgba(14,31,25,0.5)] sm:p-8 ${className}`}
    >
      {!compactHeading ? (
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-pine-950/10 pb-5">
          <div>
            <p className="flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-clay-600">
              <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
              Free roof inspection
            </p>
            <h3 className="display mt-2 text-[1.55rem] leading-tight text-pine-950">
              {variant === "full" ? "Tell us about your home" : "Request your inspection"}
            </h3>
          </div>
          <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-pine-950/10 bg-white px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-pine-950/55 sm:flex">
            <Icon name="clock" className="h-3 w-3" /> 1 min
          </span>
        </div>
      ) : null}

      <form ref={submittedRef} noValidate onSubmit={handleSubmit}>
        <div className={`grid gap-4 ${variant === "full" ? "sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
          <div>
            <label htmlFor={`${uid}-name`} className={labelClass}>
              Full name <span className="text-clay-600">*</span>
            </label>
            <input
              id={`${uid}-name`}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jordan Avery"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${uid}-name-error` : undefined}
              className={fieldClass}
            />
            {errors.name ? (
              <p id={`${uid}-name-error`} className="field-error">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor={`${uid}-phone`} className={labelClass}>
              Phone number <span className="text-clay-600">*</span>
            </label>
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(303) 555-0123"
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
              className={fieldClass}
            />
            {errors.phone ? (
              <p id={`${uid}-phone-error`} className="field-error">
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div className={variant === "full" ? "" : "sm:col-span-2"}>
            <label htmlFor={`${uid}-email`} className={labelClass}>
              Email address <span className="text-clay-600">*</span>
            </label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${uid}-email-error` : undefined}
              className={fieldClass}
            />
            {errors.email ? (
              <p id={`${uid}-email-error`} className="field-error">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className={variant === "full" ? "" : "sm:col-span-2"}>
            <label htmlFor={`${uid}-address`} className={labelClass}>
              Property address / ZIP <span className="text-clay-600">*</span>
            </label>
            <input
              id={`${uid}-address`}
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="Street address or ZIP code"
              value={values.address}
              onChange={(event) => update("address", event.target.value)}
              aria-invalid={Boolean(errors.address)}
              aria-describedby={errors.address ? `${uid}-address-error` : undefined}
              className={fieldClass}
            />
            {errors.address ? (
              <p id={`${uid}-address-error`} className="field-error">
                {errors.address}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={`${uid}-service`} className={labelClass}>
              Service needed
            </label>
            <select
              id={`${uid}-service`}
              name="service"
              value={values.service}
              onChange={(event) => update("service", event.target.value)}
              className={fieldClass}
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {variant === "full" ? (
            <div className="sm:col-span-2">
              <label htmlFor={`${uid}-notes`} className={labelClass}>
                Project details / notes
              </label>
              <textarea
                id={`${uid}-notes`}
                name="notes"
                rows={4}
                placeholder="Water stain on the ceiling, missing shingles, recent hail, gutters pulling loose…"
                value={values.notes}
                onChange={(event) => update("notes", event.target.value)}
                className={`${fieldClass} resize-y`}
              />
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary btn-lg mt-5 w-full"
        >
          <span>
            {status === "submitting"
              ? "Sending your request…"
              : variant === "full"
                ? "Claim my free inspection"
                : "Get my free inspection"}
          </span>
          <Icon
            name={status === "submitting" ? "clock" : "arrowRight"}
            className="h-4 w-4"
            strokeWidth={1.8}
          />
        </button>

        <p className="mt-3.5 flex items-start justify-center gap-1.5 text-center text-[0.68rem] leading-relaxed text-pine-950/50">
          <Icon name="shield" className="mt-px h-3 w-3 shrink-0" />
          {variant === "full"
            ? "No spam, ever. We only use your details to schedule your inspection."
            : "No pressure, no obligation. We respond within 1 business hour."}
        </p>
      </form>
    </div>
  );
}
