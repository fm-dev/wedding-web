import { type FormEvent, useMemo, useState } from "react";

type CopyStatus = "link" | "message" | null;

export default function GuestLinkPage() {
  const [guestName, setGuestName] = useState("");
  const [copyStatus, setCopyStatus] = useState<CopyStatus>(null);
  const [error, setError] = useState("");

  const invitationUrl = useMemo(() => {
    const name = guestName.trim();

    if (!name) {
      return "";
    }

    // Otomatis menggunakan domain aplikasi saat ini.
    const url = new URL("/", window.location.origin);

    url.searchParams.set("guest", name);

    return url.toString();
  }, [guestName]);

  const invitationMessage = useMemo(() => {
    const name = guestName.trim();

    if (!name || !invitationUrl) {
      return "";
    }

    return `Assalamualaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i
*${name}* untuk menghadiri acara kami.

Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :
${invitationUrl}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.

Terima kasih banyak atas perhatiannya.

Salam Hormat
*Dea & Fajri*`;
  }, [guestName, invitationUrl]);

  const copyToClipboard = async (
    value: string,
    status: Exclude<CopyStatus, null>,
  ) => {
    setError("");
    setCopyStatus(null);

    if (!guestName.trim()) {
      setError("Nama tamu wajib diisi.");
      return;
    }

    if (!value) {
      setError("Teks yang akan disalin belum tersedia.");
      return;
    }

    try {
      await navigator.clipboard.writeText(value);

      setCopyStatus(status);

      window.setTimeout(() => {
        setCopyStatus(null);
      }, 2000);
    } catch {
      setError(
        "Gagal menyalin teks. Pastikan browser memberikan izin clipboard.",
      );
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await copyToClipboard(invitationMessage, "message");
  };

  const handleGuestChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGuestName(event.target.value);
    setCopyStatus(null);
    setError("");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 dark:from-stone-950 via-white dark:via-stone-900 to-amber-50 dark:to-stone-950 px-4 py-10">
      <section className="w-full max-w-xl rounded-3xl border border-rose-100 dark:border-stone-700 bg-white/90 dark:bg-stone-900/90 p-6 shadow-xl backdrop-blur md:p-8">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500 dark:text-rose-300">
            Wedding Invitation
          </p>

          <h1 className="text-3xl font-bold text-slate-800 dark:text-stone-100">
            Buat Link Tamu
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-stone-300">
            Masukkan nama tamu untuk membuat link dan pesan
            undangan personal.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="guestName"
              className="mb-2 block text-sm font-semibold text-slate-700 dark:text-stone-200"
            >
              Nama Tamu
            </label>

            <input
              id="guestName"
              type="text"
              value={guestName}
              onChange={handleGuestChange}
              placeholder="Contoh: Dea Ayu Ananda"
              autoComplete="off"
              className="w-full rounded-xl border border-slate-200 dark:border-stone-600 bg-white dark:bg-stone-900 px-4 py-3 text-slate-800 dark:text-stone-100 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 dark:focus:ring-rose-900"
            />
          </div>

          <div>
            <label
              htmlFor="invitationUrl"
              className="mb-2 block text-sm font-semibold text-slate-700 dark:text-stone-200"
            >
              Link Undangan
            </label>

            <div className="flex gap-2">
              <input
                id="invitationUrl"
                type="text"
                value={invitationUrl}
                readOnly
                placeholder="Link undangan akan tampil di sini"
                onClick={(event) => event.currentTarget.select()}
                className="min-w-0 flex-1 rounded-xl border border-slate-200 dark:border-stone-600 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-sm text-slate-700 dark:text-stone-200 outline-none"
              />

              <button
                type="button"
                disabled={!invitationUrl}
                onClick={() =>
                  copyToClipboard(invitationUrl, "link")
                }
                className="shrink-0 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950 px-4 py-3 text-sm font-semibold text-rose-600 dark:text-rose-200 transition hover:bg-rose-100 dark:hover:bg-rose-900 disabled:cursor-not-allowed disabled:border-slate-200 dark:disabled:border-stone-700 disabled:bg-slate-100 dark:disabled:bg-stone-800 disabled:text-slate-400"
              >
                {copyStatus === "link"
                  ? "Tersalin"
                  : "Copy Link"}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="invitationMessage"
              className="mb-2 block text-sm font-semibold text-slate-700 dark:text-stone-200"
            >
              Pesan Undangan
            </label>

            <textarea
              id="invitationMessage"
              value={invitationMessage}
              readOnly
              rows={16}
              placeholder="Pesan undangan akan tampil di sini"
              onClick={(event) => event.currentTarget.select()}
              className="w-full resize-y rounded-xl border border-slate-200 dark:border-stone-600 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-sm leading-6 text-slate-700 dark:text-stone-200 outline-none"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 dark:bg-red-950 px-4 py-3 text-sm text-red-600 dark:text-red-200"
            >
              {error}
            </p>
          )}

          {copyStatus && (
            <p
              role="status"
              className="rounded-xl bg-emerald-50 dark:bg-emerald-950 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-200"
            >
              {copyStatus === "link"
                ? "Link undangan berhasil disalin."
                : "Pesan undangan berhasil disalin."}
            </p>
          )}

          <button
            type="submit"
            disabled={!guestName.trim()}
            className="w-full rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white shadow-lg shadow-rose-200 dark:shadow-black/20 transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-200 dark:focus:ring-rose-900 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-stone-700 disabled:shadow-none"
          >
            {copyStatus === "message"
              ? "Pesan Tersalin"
              : "Copy Pesan Undangan"}
          </button>
        </form>
      </section>
    </main>
  );
}