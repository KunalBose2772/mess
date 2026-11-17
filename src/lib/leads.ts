import fs from 'node:fs/promises';
import path from 'node:path';

export function cleanInput(value: unknown): string {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')
    .trim();
}

function csvEscape(value: string): string {
  const safe = value.replace(/\r?\n/g, ' ');
  return `"${safe.replace(/"/g, '""')}"`;
}

export async function appendLeadCsv(row: string[]) {
  const dataDir = path.join(process.cwd(), 'data');
  const leadsFile = path.join(dataDir, 'leads.csv');
  const header =
    'Date,Type,Name,Organization,Phone,Email,Order Frequency,Approx Meals,Diet Preference,Location,Message\n';

  try {
    await fs.mkdir(dataDir, { recursive: true });
    let exists = true;
    try {
      await fs.access(leadsFile);
    } catch {
      exists = false;
    }

    const line = row.map(csvEscape).join(',') + '\n';
    await fs.appendFile(leadsFile, exists ? line : header + line, 'utf8');
  } catch (err) {
    console.warn('Unable to write leads.csv:', err);
  }
}

