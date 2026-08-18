import { useRouter } from 'expo-router';
import { ArrowLeft, PaperPlaneTilt, ShieldCheck } from 'phosphor-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { IconButton } from '../components/ui/IconButton';
import { Screen } from '../components/ui/Screen';
import { colors, fonts, radii, type } from '../constants/theme';
import { useContacts, type Relationship } from '../contexts/ContactsContext';

const RELATIONSHIPS: Relationship[] = ['Family', 'Friend', 'Partner', 'Other'];

export default function AddContactScreen() {
  const router = useRouter();
  const { addContact } = useContacts();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [relationship, setRelationship] = useState<Relationship>('Family');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const canSubmit = name.trim().length > 0 && phone.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    addContact({ name: name.trim(), phone: phone.trim(), email: email.trim() || undefined, relationship });
    router.push('/invitation-sent');
  };

  return (
    <Screen scroll>
      <View style={styles.header}>
        <IconButton onPress={() => router.back()}>
          <ArrowLeft size={18} color={colors.text} />
        </IconButton>
        <Text style={type.meta}>STEP 1 OF 2</Text>
      </View>

      <Text style={type.screenTitle}>Add contact</Text>
      <Text style={[type.body, styles.subtitle]}>Invite someone you'd want reached first.</Text>

      <View style={styles.form}>
        <Field label="Full name">
          <TextInput
            value={name}
            onChangeText={setName}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            placeholder="Maya Ellis"
            placeholderTextColor="rgba(241,238,255,0.3)"
            autoCapitalize="words"
            style={[styles.input, focusedField === 'name' && styles.inputFocused]}
          />
        </Field>

        <Field label="Phone number">
          <TextInput
            value={phone}
            onChangeText={setPhone}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            placeholder="+1 (555) 000-0000"
            placeholderTextColor="rgba(241,238,255,0.3)"
            keyboardType="phone-pad"
            style={[styles.input, focusedField === 'phone' && styles.inputFocused]}
          />
        </Field>

        <Field label="Email" optional>
          <TextInput
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            placeholder="maya@example.com"
            placeholderTextColor="rgba(241,238,255,0.3)"
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input, focusedField === 'email' && styles.inputFocused]}
          />
        </Field>

        <Field label="Relationship">
          <View style={styles.relRow}>
            {RELATIONSHIPS.map((rel) => {
              const active = relationship === rel;
              return (
                <TouchableOpacity
                  key={rel}
                  style={[styles.relPill, active && styles.relPillActive]}
                  onPress={() => setRelationship(rel)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.relText, active && styles.relTextActive]}>{rel}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Field>

        <View style={styles.privacyCard}>
          <ShieldCheck size={18} color={colors.mint} weight="fill" />
          <Text style={styles.privacyText}>
            {name.trim() || 'They'} will only see your location while an alert is active.
          </Text>
        </View>
      </View>

      <Button
        label="Send invitation"
        variant="mint"
        icon={<PaperPlaneTilt size={17} color="#0D0033" weight="fill" />}
        onPress={handleSubmit}
        disabled={!canSubmit}
      />
      <Text style={[type.meta, styles.helper]}>They'll get a text with a one-tap accept link</Text>
    </Screen>
  );
}

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>
        {label.toUpperCase()}
        {optional && <Text style={styles.optional}> optional</Text>}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  subtitle: { marginTop: 8, marginBottom: 28 },
  form: { gap: 20, marginBottom: 28 },
  field: { gap: 8 },
  label: { fontFamily: fonts.heading, fontSize: 11, letterSpacing: 1, color: colors.textFaint },
  optional: { fontFamily: fonts.body, textTransform: 'none', color: colors.textFaint },
  input: {
    backgroundColor: colors.surfaceFill,
    borderRadius: radii.input,
    paddingHorizontal: 16,
    paddingVertical: 15,
    color: colors.text,
    fontFamily: fonts.body,
    fontSize: 15.5,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
  },
  inputFocused: {
    borderColor: colors.mint,
    shadowColor: colors.mint,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 0 },
    elevation: 3,
  },
  relRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  relPill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: radii.pill,
    backgroundColor: colors.surfaceFill,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
  },
  relPillActive: { backgroundColor: colors.mint, borderColor: colors.mint },
  relText: { fontFamily: fonts.heading, fontSize: 13.5, color: colors.textMuted },
  relTextActive: { color: '#0D0033' },
  privacyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(81,49,254,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(81,49,254,0.3)',
    borderRadius: 14,
    padding: 14,
  },
  privacyText: { flex: 1, fontFamily: fonts.body, fontSize: 12.5, color: colors.textMuted, lineHeight: 18 },
  helper: { textAlign: 'center', marginTop: 12 },
});
