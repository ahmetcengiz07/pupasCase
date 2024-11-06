import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icons from '../svg/icons';

export const CardDetails = () => {
  return (
    <View style={styles.cardInfoContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Kart bilgileri</Text>
        <View style={styles.borderContainer}>
          <View style={styles.cardInfoRow}>
            <Icons style={styles.iconsStyle} iconName="creditCard" />
            <Text style={styles.cardInfoText}>4310 1030 3000 9530</Text>
            <Icons style={styles.iconPadding} iconName="copy" />
          </View>
          <View style={styles.cardInfoRow}>
            <View style={[styles.rowWithIcon, {paddingRight: 18}]}>
              <Icons style={styles.iconsStyle} iconName="cvc" />
              <Text style={styles.cardInfoText}>10 / 26</Text>
            </View>
            <View style={styles.rowWithIcon}>
              <Icons style={styles.iconsStyle} iconName="calendar" />
              <Text style={styles.cardInfoText}>430</Text>
              <Icons style={styles.iconPadding} iconName="copy" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.transactionsHeader}>
        <Text style={styles.sectionHeaderText}>Kart hareketleri</Text>
        <View style={styles.allButton}>
          <Text style={styles.allButtonText}>Tümü</Text>
        </View>
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.transactionRow}>
          <View style={styles.rowWithIcon}>
            <Icons style={styles.iconsStyle} iconName="clothes" />
            <View style={styles.transactionTextContainer}>
              <Text style={styles.transactionTitle}>
                LC Waikiki Mağazacılık H..
              </Text>
              <Text style={styles.transactionDate}>30.03.2024</Text>
            </View>
          </View>
          <Text style={styles.transactionAmount}>-1304.43₺</Text>
        </View>
        <View style={styles.transactionRow}>
          <View style={styles.rowWithIcon}>
            <Icons style={styles.iconsStyle} iconName="drink" />
            <View style={styles.transactionTextContainer}>
              <Text style={styles.transactionTitle}>Happy Moon's Grup</Text>
              <Text style={styles.transactionDate}>13.04.2024</Text>
            </View>
          </View>
          <Text style={styles.transactionAmount}>-310.00₺</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardInfoContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
  },
  sectionHeader: {
    marginTop: 12,
  },
  sectionHeaderText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 5,
  },
  borderContainer: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#ECEEF0',
  },
  cardInfoRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ECEEF0',
    alignItems: 'center',
  },
  iconsStyle: {
    width: 32,
    height: 32,
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  cardInfoText: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  iconPadding: {
    paddingHorizontal: 8,
  },
  rowWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionsHeader: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  allButton: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  allButtonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#313538',
  },
  transactionRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ECEEF0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transactionTextContainer: {
    paddingHorizontal: 12,
  },
  transactionTitle: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: '#151718',
  },
  transactionDate: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '400',
    color: '#697177',
  },
  transactionAmount: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
});